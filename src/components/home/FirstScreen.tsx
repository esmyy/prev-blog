import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React, { FC } from "react";
import styles from "./FirstScreen.module.css";

type FeatureItem = {
  name: string;
  description: JSX.Element;
  link: string;
  visible?: boolean;
  icon?: any;
};

const ENTRY_LIST: FeatureItem[] = [
  {
    name: "生活随笔",
    link: "/blog",
    description: (
      <>
        记录生活的一些思考和体会，练习和发展表达的能力。发现美好，分享美好，创造美好，成为美好。
      </>
    ),
  },
  {
    name: "技术手册",
    link: "/todo",
    visible: false,
    description: (
      <>
        技术点研究，专题文档，工具库，实践方案等。
        梳理知识，构建技术体系，做一次有效的学习整理，避免无效的重复。温故知新，做到心中有数。
      </>
    ),
  },
];

export const FirstScreen: FC<{}> = ({}) => {
  const { siteConfig } = useDocusaurusContext();
  const cover: any = siteConfig.customFields.cover;
  return (
    <div
      className={styles.firstScreen}
      style={{ color: cover.textColor || "#fff" }}
    >
      <div className={styles.lifeCard}>
        <p className={styles.slogan}>慎思笃行</p>
        {ENTRY_LIST.map((config) => (
          <div
            className={`${styles.entryItem} ${
              config.visible === false ? "hidden" : ""
            }`}
            key={config.name}
          >
            <a className={styles.entryLink} href={config.link}>
              <span>{config.name}</span> &gt;
            </a>
          </div>
        ))}
      </div>
      <div className={styles.pictureIntroduction}>
        <p className={styles.descLine}>{cover.description}</p>
        <p className={styles.descLine}>{cover.date}</p>
      </div>
    </div>
  );
};
