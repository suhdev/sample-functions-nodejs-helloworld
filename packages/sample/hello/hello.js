function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hello ' + process.env.SEND_GRID_A + '!'
    console.log(greeting)
    return {"body": process.env.SEND_GRID_A || 'Okay'}
  }

exports.main = main
