 module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy("USDCToken", {
    from: deployer,
    log: true,
    deterministicDeployment: false
  })

  const usdc = await ethers.getContract("USDCToken")
  console.log("Mint some USDC")
  await (await usdc.mint(deployer, "1000000000000000000000")).wait()
  await (await usdc.mint("0x26006236eaB6409D9FDECb16ed841033d6B4A6bC", "1000000000000000000000")).wait()
}

module.exports.tags = ["USDCToken"]
module.exports.dependencies = ["UniswapV2Factory", "UniswapV2Router02"]
