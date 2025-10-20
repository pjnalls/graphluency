import { CountryCode, CountryName } from "./ability";

export type BriefProfileProps = {
    learning: { countryCode: CountryCode; countryName: CountryName }[]
}