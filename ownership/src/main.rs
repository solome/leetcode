fn calculate_length(s: &String) -> usize {
	s.len()
}

fn main() {
	let s = String::from("失的猛");
	let len = calculate_length(&s);
	println!("{}, {}", s, len);

	let s = String::from("hello world!");
	let hello = &s[..5];
	let world = &s[5..];

	println!("{}, {}", hello, world);
}
