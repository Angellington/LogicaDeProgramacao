console.clear()
let n = 5;
for (let i = 1; i <= n; i++){
    let spaces = " ".repeat(n - i)
    let hashes = "#".repeat(i)
    let lhashe = "#".repeat((n + i) - n) 
    let lspaces = " ".repeat(n - i)
    
    

    console.log(spaces + hashes + lhashe + lspaces)
}
for (i = n - 1; i >= 1; i--){
    spaces = " ".repeat(n - i)
    hashes = "#".repeat(i)
    lhashe = "#".repeat((n + i) - n) 
    lspaces = " ".repeat(n - i)
    
    

    console.log(spaces + hashes + lhashe + lspaces)
}