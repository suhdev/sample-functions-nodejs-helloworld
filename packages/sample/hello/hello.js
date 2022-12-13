function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body": process.env.SEND_GRID_A}
  }

exports.main = main
