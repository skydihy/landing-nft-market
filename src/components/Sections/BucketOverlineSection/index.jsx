import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Components
import PrimaryButton from "../../UI/Buttons/PrimaryButton";
import SecondaryButton from "../../UI/Buttons/SecondaryButton";

import * as styles from "styles/sections/BucketOverline.module.scss";

const BucketOverlineSection = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.overlineContainer}>
        <div className={styles.leftBox}>
          <p className={styles.topDescription}>Overline</p>
          <h1 className={styles.headingDescription}>
            Sapien ipsum scelerisque convallis fusce
          </h1>
          <p className={styles.bottomDescription}>
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div className="flex flex-row gap-4 mt-12 smobile:justify-center smobile:flex-col">
            <PrimaryButton title="Get started" />
            <SecondaryButton title="Learn more" />
          </div>
        </div>
        <div className={styles.rightBox}>
          <StaticImage
            src="../../../images/sections/bucket-overline/bucket.png"
            alt="Bucket"
            objectFit="contain"
            quality={80}
          />
        </div>
      </div>
    </div>
  );
};

export default BucketOverlineSection;
