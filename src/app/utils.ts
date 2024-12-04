export function generateUniqueId(): string {
  /**
   * Generates a unique identifier using random values and current time.
   * UUID-like format: XXXXXXXX-XXXX-4XXX-YXXX-XXXXXXXXXXXX
   * Where X is a hexadecimal digit and Y is a variant character.
   */
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}

type Cx = (...args: Array<string | boolean | null | undefined>) => string;
export const cx: Cx = (...args) => {
  return args
    .flat()
    .filter(
      (x: string | boolean | null | undefined) =>
        x !== null && x !== undefined && typeof x !== "boolean"
    )
    .join(" ");
};
