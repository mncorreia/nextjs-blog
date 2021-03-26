import { ILoremIpsumParams, loremIpsum } from "lorem-ipsum";

export function generateText(params: ILoremIpsumParams): string{
    return loremIpsum(params);
}