import {
  BanknotesIcon,
  ChartBarSquareIcon,
  DocumentPlusIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Breadcrumbs from "@src/components/Breadcrumbs";
import Card from "@src/components/Card";
import StatisticSingle from "@src/components/StatisticSingle";
import StatisticSingleCard from "@src/components/StatisticSingleCard";
import { SM_BREAKPOINT } from "@src/lib/constants/constant";
import { useAppDispatch, useAppSelector } from "@src/lib/hooks/useRedux";
import useWindowDimensions from "@src/lib/hooks/useWindowDimension";
import { numberWithCommas } from "@src/lib/utils/helper";
import React, { useEffect } from "react";
import TestSkeleton from "./components/TestSkeleton";
import { fetchRandomData } from "./store/actions/testAction";

const TestPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { testData, error, loading } = useAppSelector((state) => state.test);

  useEffect(() => {
    dispatch(fetchRandomData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { width } = useWindowDimensions();

  return (
    <>
      <Breadcrumbs currentPage="Test" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-3">
        {loading && <TestSkeleton />}
        {!loading && (
          <>
            <Card outline className="col-span-2">
              <div>User Growth</div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  mt-2">
                <StatisticSingle
                  data={numberWithCommas(1000000)}
                  title="Actual"
                  bgIconColor="bg-indigo-200"
                  Icon={
                    <BanknotesIcon className="text-indigo-600 w-6 h-6 bg-" />
                  }
                />
                <StatisticSingle
                  data={numberWithCommas(58200000)}
                  title="Target"
                  bgIconColor="bg-blue-200"
                  Icon={
                    <ArrowTrendingUpIcon className="text-blue-600 w-6 h-6" />
                  }
                />
                <StatisticSingle
                  data={"15%"}
                  title="Ach."
                  bgIconColor="bg-green-200"
                  Icon={
                    <ChartBarSquareIcon className="text-green-600 w-6 h-6" />
                  }
                />
              </div>
            </Card>
            <Card outline className="col-span-2">
              <div>Sales Growth</div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-2">
                <StatisticSingle
                  data={numberWithCommas(15000000000)}
                  title="Actual"
                  bgIconColor="bg-indigo-200"
                  Icon={
                    <BanknotesIcon className="text-indigo-600 w-6 h-6 bg-" />
                  }
                />
                <StatisticSingle
                  data={numberWithCommas(85000000000)}
                  title="Target"
                  bgIconColor="bg-blue-200"
                  Icon={
                    <ArrowTrendingUpIcon className="text-blue-600 w-6 h-6" />
                  }
                />
                <StatisticSingle
                  data={"5%"}
                  title="Ach."
                  bgIconColor="bg-green-200"
                  Icon={
                    <ChartBarSquareIcon className="text-green-600 w-6 h-6" />
                  }
                />
              </div>
            </Card>
            <StatisticSingleCard
              outline
              data={numberWithCommas(1234)}
              title="User Belum Active"
              bgIconColor="bg-red-200"
              mode={width < SM_BREAKPOINT ? "col" : "row"}
              Icon={<UsersIcon className="text-red-600 w-6 h-6" />}
            />
            <StatisticSingleCard
              outline
              data={numberWithCommas(12343434)}
              title="User Belum Transaksi"
              bgIconColor="bg-red-200"
              mode={width < SM_BREAKPOINT ? "col" : "row"}
              Icon={<UserGroupIcon className="text-red-600 w-6 h-6" />}
            />
            <StatisticSingleCard
              outline
              data={numberWithCommas(120444322)}
              title="Jumlah PO"
              bgIconColor="bg-green-200"
              mode={width < SM_BREAKPOINT ? "col" : "row"}
              Icon={<DocumentPlusIcon className="text-green-600 w-6 h-6" />}
            />
            <StatisticSingleCard
              outline
              data={numberWithCommas(12000000)}
              title="Jumlah Faktur"
              bgIconColor="bg-green-200"
              mode={width < SM_BREAKPOINT ? "col" : "row"}
              Icon={<DocumentTextIcon className="text-green-600 w-6 h-6" />}
            />
          </>
        )}
      </div>
    </>
  );
};
export default TestPage;