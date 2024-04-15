import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import VerticalCharts from "@/components/VerticalCharts";
import HorizontalChart from "@/components/HorizontalChart";
import PieChart from "@/components/PieChart";


export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
       {/* <VerticalCharts/>
       <HorizontalChart/> */}
       <PieChart/>
      </main>
    </>
  );
}
