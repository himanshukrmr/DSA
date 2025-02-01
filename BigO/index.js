function func1(input){
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for(let i = 0 ;i<input.length ; i++){  // O(n)
        funct2(); // O(n)
        let boolean = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}

func1();

// so the big O notation will be 3*O(1) + 4* O(n) or it will be simplified as O(n)