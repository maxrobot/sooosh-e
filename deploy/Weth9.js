module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
  
    await deploy("WETH9Mock", {
      from: deployer,
      log: true,
      deterministicDeployment: false
    })
  
  }
  
  module.exports.tags = ["Weth9"]
  module.exports.dependencies = ["UniswapV2Factory"]
  