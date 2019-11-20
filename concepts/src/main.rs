fn fibonacci(n: u32) -> u32 {
	if n == 1 {
		n
	} else {
		fibonacci(n - 1) * n
	}
}

fn main() {
	println!("Hello, world!");
	let n = 8;
	println!("result {}, {}", fibonacci(n), n);
}
