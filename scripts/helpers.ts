import path from "node:path"
import fs from "node:fs"
import p from "node:child_process"

const packagesDir = path.resolve(__dirname, "../packages")
const tarDir = path.resolve(__dirname, "../build/tar")
const packageSubdirs = fs.readdirSync(packagesDir).map((name) => path.join(packagesDir, name))

function getPackageJson(packageName: string) {
  const subname = packageName.split("/").at(-1) ?? "none"
  let searchDirs = packageSubdirs.filter((dir) => dir.endsWith(subname))
  if (searchDirs.length === 0) {
    searchDirs = packageSubdirs
  }
  for (const dir of searchDirs) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf8"))
      if (packageJson.name === packageName) {
        return packageJson
      }
    } catch (e) {
      console.warn(e)
    }
  }
  throw new Error(`Could not find package.json for ${packageName} in ${searchDirs}`)
}

function getTarFile(packageName: string) {
  return path.join(tarDir, packageName.replace("/", "-") + ".tgz")
}

export function exec(command: string) {
  console.log(`+ ${command}`)
  p.execSync(command, { encoding: "utf-8", stdio: "inherit" })
}

const alreadyInstalled = new Map<string, Set<string>>()

export function installDependencyGraphFromTar(
  into: string,
  packageName: string,
  cmd = "npm install",
) {
  const have = alreadyInstalled.get(into)?.has(packageName)
  if (have) {
    return
  }

  console.log(`install ${packageName}`)
  const packageJson = getPackageJson(packageName)
  for (const dependency of Object.keys(packageJson.dependencies ?? {})) {
    installDependencyGraphFromTar(into, dependency, cmd)
  }
  const tarFile = getTarFile(packageName)
  exec(`cd ${into} && ${cmd} ${packageName}@${tarFile}`)
  alreadyInstalled.set(into, alreadyInstalled.get(into)?.add(packageName) ?? new Set([packageName]))
}

export function resolve(...parts: string[]) {
  return path.resolve(...parts)
}