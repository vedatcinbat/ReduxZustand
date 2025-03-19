export interface LibraryState {
    availableBooks: number[];
    borrowedBooks: number[];
    loading?: boolean;
    error?: string | null;
}