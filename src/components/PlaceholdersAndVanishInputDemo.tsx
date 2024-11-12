"use client";

import { useRouter } from 'next/navigation';
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const router = useRouter();
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // Helper functions to get random odd/even numbers within the range
  const getRandomOddNumber = () => {
    const oddNumbers = Array.from({ length: 13 }, (_, i) => 1 + i * 2); // [1, 3, 5, ..., 25]
    return oddNumbers[Math.floor(Math.random() * oddNumbers.length)];
  };

  const getRandomEvenNumber = () => {
    const evenNumbers = Array.from({ length: 12 }, (_, i) => 2 + i * 2); // [2, 4, 6, ..., 24]
    return evenNumbers[Math.floor(Math.random() * evenNumbers.length)];
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = (e.target as HTMLFormElement).querySelector('input')?.value?.trim();

    if (searchTerm) {
      const lowerQuery = searchTerm.toLowerCase();

      // Conditional routing based on specific keywords
      if (lowerQuery.includes("about")) {
        router.push("/about");
      } else if (lowerQuery.includes("services")) {
        router.push("/services");
      } else if (lowerQuery.includes("event page")) {
        router.push("/event");
      } else if (lowerQuery.includes("event")) {
        // Redirect to random odd or even event number
        const isEven = lowerQuery.includes("even");
        const randomNum = isEven ? getRandomEvenNumber() : getRandomOddNumber();
        router.push(`/events/${randomNum}`);
      } else {
        router.push(`https://chatgpt.com/`);
      }
    } else {
      console.log("Please enter a search term.");
    }
  };

  return (
    <div>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
