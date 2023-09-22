declare const UNITS: readonly ["s", "second", "seconds", "m", "minute", "minutes", "h", "hour", "hours", "d", "day", "days", "w", "weak", "weaks"];
export type TUnit = typeof UNITS[number];
interface IDuration {
    (value: number, unit: TUnit): number;
    (value: `${number}${TUnit}`): number;
    s1: number;
    s2: number;
    s3: number;
    s4: number;
    s5: number;
    s6: number;
    s7: number;
    s8: number;
    s9: number;
    s10: number;
    s15: number;
    s20: number;
    s25: number;
    s30: number;
    m1: number;
    m2: number;
    m3: number;
    m4: number;
    m5: number;
    m6: number;
    m7: number;
    m8: number;
    m9: number;
    m10: number;
    m15: number;
    m20: number;
    m25: number;
    m30: number;
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
    h7: number;
    h8: number;
    h9: number;
    h10: number;
    h12: number;
    h16: number;
    h20: number;
    d1: number;
    d2: number;
    d3: number;
    d4: number;
    d5: number;
    d6: number;
    d7: number;
    d8: number;
    d9: number;
    w1: number;
    d10: number;
    w2: number;
    d15: number;
    d20: number;
    d25: number;
    d30: number;
}
export declare const duration: IDuration;
export {};
