import Head from "next/head";
import {IoHome} from "react-icons/io5";
import {useTranslation} from "@/app/i18n";
import DashboardHeader from "@/components/common/DashboardHeader";


interface Props {
  params: {
    lng: string;
  };
}

export default async function Home({params:{lng}}: Props) {
  const {t} = await useTranslation(lng, "dashboard")
  return (
      <>
        <Head>
          <title>Admin Dashboard</title>
          <meta name="description" content="admin dashboard next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="dashboard">
          {/* title dashboard */}
          <DashboardHeader
              titleLeft={t("titleLeft")}
              titleRight={t("titleRight")}
              subtitle={t("subtitle")}
              icon={<IoHome/>}
          />

          {/*dashboard four cards*/}
          <div className="topfourcards flex flex-sb">
            <div className="four_card">
                <h2>Total Blogs</h2>
                <span>10</span>
            </div>
            <div className="four_card">
              <h2>Total Topics</h2>
              <span>10</span>
            </div>
            <div className="four_card">
              <h2>Total Tags</h2>
              <span>10</span>
            </div>
            <div className="four_card">
              <h2>Draft Blogs</h2>
              <span>10</span>
            </div>
          </div>

          {/*year overview*/}
          <div>
            <div>
              <div>
                <h3>Year Overview</h3>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <h3 className="text-right">10 /  365 <br/> <span>Total Published</span></h3>
              </div>
            </div>
          </div>

          <div className="right_salescont">
            <div>
              <h3>Blogs By Category</h3>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="blogscategory flex flex-center">
              <table>
                <thead>
                  <tr>
                    <th>Topics</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Html ,Css & Js</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Html ,Css & Js</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Html ,Css & Js</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Html ,Css & Js</td>
                  <td>10</td>
                </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </>
  );
}
