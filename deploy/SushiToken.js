 module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy("SushiToken", {
    from: deployer,
    log: true,
    deterministicDeployment: false
  })

  const sushi = await ethers.getContract("SushiToken")
  console.log("Mint some Sushi")
  await (await sushi.mint(deployer, "1000000000000000000000")).wait()
}

module.exports.tags = ["SushiToken"]
module.exports.dependencies = ["UniswapV2Factory", "UniswapV2Router02"]
