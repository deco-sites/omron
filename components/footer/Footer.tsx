import Logo from "$store/components/footer/Logo.tsx";
import Newsletter from "$store/islands/Newsletter.tsx";
import FooterItems from "$store/components/footer/FooterItems.tsx";
import Social from "$store/components/footer/Social.tsx";
import PaymentMethods from "$store/components/footer/PaymentMethods.tsx";
import MobileApps from "$store/components/footer/MobileApps.tsx";
import ExtraLinks from "$store/components/footer/ExtraLinks.tsx";
import PoweredBy from "$store/components/footer/PoweredBy.tsx";
import RegionSelector from "$store/components/footer/RegionSelector.tsx";
import ColorClasses from "$store/components/footer/ColorClasses.tsx";
import Divider from "$store/components/footer/Divider.tsx";
import BackToTop from "$store/components/footer/BackToTop.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export interface SocialItem {
  label:
    | "Discord"
    | "Facebook"
    | "Instagram"
    | "Linkedin"
    | "Tiktok"
    | "Twitter";
  link: string;
}

export interface PaymentItem {
  label: "Diners" | "Elo" | "Mastercard" | "Pix" | "Visa";
}

export interface MobileApps {
  /** @description Link to the app */
  apple?: string;
  /** @description Link to the app */
  android?: string;
}

export interface RegionOptions {
  currency?: Item[];
  language?: Item[];
}

export interface NewsletterForm {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Props {
  logo?: {
    image: LiveImage;
    description?: string;
  };
  newsletter?: {
    title?: string;
    /** @format textarea */
    description?: string;
    form?: NewsletterForm;
  };
  sections?: Section[];
  social?: {
    title?: string;
    items: SocialItem[];
  };
  payments?: {
    title?: string;
    items: PaymentItem[];
  };
  mobileApps?: MobileApps;
  regionOptions?: RegionOptions;
  extraLinks?: Item[];
  backToTheTop?: {
    text?: string;
  };
  layout?: {
    backgroundColor?:
      | "Footer"
      | "Secondary"
      | "Accent"
      | "Base 100"
      | "Base 100 inverted";
    variation?:
      | "Variation 1"
      | "Variation 2"
      | "Variation 3"
      | "Variation 4"
      | "Variation 5";
    hide?: {
      logo?: boolean;
      newsletter?: boolean;
      sectionLinks?: boolean;
      socialLinks?: boolean;
      paymentMethods?: boolean;
      mobileApps?: boolean;
      regionOptions?: boolean;
      extraLinks?: boolean;
      backToTheTop?: boolean;
    };
  };
}

function Footer({
  logo,
  newsletter,
  sections = [],
  social = [],
  payments = [],
  mobileApps = { apple: "", android: "" },
  regionOptions = [],
  extraLinks = [],
  backToTheTop,
  layout,
}: Props) {
  const _logo = layout?.hide?.logo ? <></> : <Logo logo={logo} />;
  const _newsletter = layout?.hide?.newsletter ? <></> : (
    <Newsletter
      content={newsletter}
      tiled={layout?.variation == "Variation 4" ||
        layout?.variation == "Variation 5"}
    />
  );
  const _sectionLinks = layout?.hide?.sectionLinks ? <></> : (
    <FooterItems
      sections={sections}
      justifty={layout?.variation == "Variation 2" ||
        layout?.variation == "Variation 3"}
    />
  );
  const _social = layout?.hide?.socialLinks
    ? <></>
    : <Social content={social} vertical={layout?.variation == "Variation 3"} />;
  const _payments = layout?.hide?.paymentMethods
    ? <></>
    : <PaymentMethods content={payments} />;
  const _apps = layout?.hide?.mobileApps
    ? <></>
    : <MobileApps content={mobileApps} />;
  const _region = layout?.hide?.regionOptions
    ? <></>
    : <RegionSelector content={regionOptions} />;
  const _links = layout?.hide?.extraLinks
    ? <></>
    : <ExtraLinks content={extraLinks} />;

  return (
    <footer
      class={`w-full flex flex-col pt-10 pb-2 lg:pb-10 gap-10 ${
        ColorClasses(layout)
      } bg-footer`}
    >
      <div class="lg:container mx-6 lg:mx-auto">
        {(!layout?.variation || layout?.variation == "Variation 1") && (
          <div class="flex flex-col gap-10">
            <div class="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12">
              {_logo}
              {_sectionLinks}
              {_newsletter}
            </div>
            <Divider />
            <div class="flex flex-col md:flex-row gap-10 md:gap-14 md:items-end">
              {_payments}
              {_social}
              {_apps}
              {_region}
            </div>
            <Divider />
            <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10">
              <PoweredBy />
              {_links}
            </div>
          </div>
        )}
        {layout?.variation == "Variation 2" && (
          <div class="flex flex-col gap-10">
            <div class="flex flex-col md:flex-row gap-10">
              <div class="flex flex-col gap-10 lg:w-1/2">
                {_logo}
                {_social}
                {_payments}
                {_apps}
                {_region}
              </div>
              <div class="flex flex-col gap-10 lg:gap-20 lg:w-1/2 lg:pr-10">
                {_newsletter}
                {_sectionLinks}
              </div>
            </div>
            <Divider />
            <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10">
              <PoweredBy />
              {_links}
            </div>
          </div>
        )}
        {layout?.variation == "Variation 3" && (
          <div class="flex flex-col gap-10">
            {_logo}
            <div class="flex flex-col lg:flex-row gap-14">
              <div class="flex flex-col gap-10 lg:w-2/5">
                {_newsletter}
                {_payments}
                {_apps}
              </div>
              <div class="flex flex-col gap-10 lg:gap-20 lg:w-3/5 lg:items-end">
                <div class="flex flex-col lg:flex-row gap-10">
                  {_sectionLinks}
                  {_social}
                </div>
                {_region}
              </div>
            </div>
            <Divider />
            <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10">
              <PoweredBy />
              {_links}
            </div>
          </div>
        )}
        {layout?.variation == "Variation 4" && (
          <div class="flex flex-col gap-10">
            {_newsletter}
            {layout?.hide?.newsletter ? <></> : <Divider />}
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:justify-between">
              {_sectionLinks}
              <div class="flex flex-col gap-10 lg:gap-10 lg:w-2/5 lg:pl-10">
                <div class="flex flex-col md:flex-row gap-10 lg:gap-20">
                  <div class="flex-auto">
                    {_payments}
                  </div>
                  <div class="flex-auto">
                    {_social}
                  </div>
                </div>
                {_region}
                {_apps}
              </div>
            </div>
            <Divider />
            <div class="flex flex-col md:flex-row md:justify-between gap-10 md:items-center">
              {_logo}
              <PoweredBy />
            </div>
          </div>
        )}
        {layout?.variation == "Variation 5" && (
          <div class="flex flex-col gap-10">
            {_newsletter}
            {layout?.hide?.newsletter ? <></> : <Divider />}
            {_logo}
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:justify-between">
              {_sectionLinks}
              <div class="flex flex-col gap-10 lg:w-2/5 lg:pl-10">
                {_payments}
                {_social}
                {_apps}
              </div>
            </div>
            <Divider />
            <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10 md:items-center">
              <PoweredBy />
              <div class="flex flex-col md:flex-row gap-10 md:items-center">
                {_links}
                {_region}
              </div>
            </div>
          </div>
        )}
      </div>
      {layout?.hide?.backToTheTop
        ? <></>
        : <BackToTop content={backToTheTop?.text} />}
    </footer>
  );
}

export default Footer;
