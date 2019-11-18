fn calculate_length(s: &String) -> usize {
	s.len()
}

fn main() {
	let s = String::from("失的猛");
	let len = calculate_length(&s);
	println!("{}, {}", s, len);
}
