import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// Assets
import LikedIcon from "assets/svg/like-active.svg";
import LikeIcon from "assets/svg/like.svg";
import TimerIcon from "assets/svg/timer.svg";

import * as styles from "styles/ui/NftCard.module.scss";

const NftCard = ({
  width = "fit-content",
  padding = 0,
  nft,
  showProfile = false,
}) => {
  const {
    name,
    prices,
    remainingTimes,
    peopleBidding,
    poepleLikes,
    liked,
    imgPath,
    profileCoverPathList,
  } = nft;

  const imageOptimized = getImage(imgPath);

  return (
    <div style={{ width: width, padding: padding }}>
      <div className={styles.cardImageWrapper}>
        <GatsbyImage image={imageOptimized} alt={name} />
        <GatsbyImage
          class={styles.imageShadow}
          image={imageOptimized}
          alt={name}
        />
      </div>

      <div className={styles.cardDescriptionNPricing}>
        <div className={styles.name}>{name}</div>
        <div className={styles.prices}>
          <span>{prices}</span>
          <span className="ml-2">ETH</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-6">
        <TimerIcon />
        <p>
          {remainingTimes ? remainingTimes : "-"}
          <span>min left</span>
        </p>
      </div>
      <div className={styles.bidding}>
        <div className="flex items-center">
          {showProfile && profileCoverPathList ? (
            <div style={{ marginLeft: "8px" }}>
              {profileCoverPathList.map((path, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "inline-block",
                    borderRadius: "50%",
                    border: "4px solid #FFF",
                    marginLeft: "-16px",
                  }}
                >
                  <GatsbyImage image={getImage(path)} alt="profile" />
                </div>
              ))}
            </div>
          ) : null}

          <p className={`inline-block ${showProfile ? "ml-[8px]" : ""}`}>
            {parseInt(peopleBidding)}
            <span className="ml-[4px]">people are bidding</span>
          </p>
        </div>
        <div className="flex gap-2">
          {liked ? <LikedIcon /> : <LikeIcon />}
          <p>{parseInt(poepleLikes)}</p>
        </div>
      </div>
    </div>
  );
};

export default NftCard;