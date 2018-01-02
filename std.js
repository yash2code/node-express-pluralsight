process.stdin.resume()
process.stdin.setEncoding('utf-8')

process.stdin.on('data', (chunk) => process.stdout.write('data '+ chunk) )

process.stdin.on('end', (chunk) => process.stderr.write('End\n') )