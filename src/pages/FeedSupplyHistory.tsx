import { useState } from "react";
import Container from "../components/layout/Container";
import { MapPin, Search } from "lucide-react";
import TabBtn from "../components/ui/TabBtn";
import PageTitle from "../components/module/PageTitle";
import MonitoringSection from "../components/ui/MonitoringSection";
import CustomLabel from "../components/ui/CustomLabel";
import CustomBtn from "../components/ui/CustomBtn";
import Input from "../components/ui/Input";
import {
  DataTable,
  DataTableFoot,
  DataTableHead,
  DataTableTd,
  DataTableTh,
} from "../components/ui/DataTable";
import ChartPlaceholder from "../components/module/ChartPlaceholder";
import Select from "../components/ui/Select";

// 로컬 타임존 기준 YYYY-MM-DD 생성 (KST 기준 어긋남 방지)
function getLocalDate() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function FeedSupplyHistory() {
  const [selectedDate, setSelectedDate] = useState<string>(getLocalDate());
  const [selectedSchStandard, setSelectedSchStandard] = useState<string>("일단위");

  return (
    <Container>
      <PageTitle title="사료 공급 모니터링" />
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-b-slate-700">
          <h3 className="flex justify-start items-center gap-2 w-full lg:w-auto h-12 xl:h-16">
            <MapPin size={24} className="text-indigo-300" />
            <p className="text-lg xl:text-xl font-bold">
              2 고가수조 <span>(RAS-A-00023)</span>
            </p>
          </h3>

          <div className="flex justify-end items-stretch h-12 xl:h-16 w-full lg:w-auto">
            <TabBtn text="사료공급 모니터링" className="grow" />
            <TabBtn text="사료공급 환경설정" className="grow" />
            <TabBtn text="사료공급 이력" className="grow" active />
          </div>
        </div>

        <div className="flex flex-col gap-8 py-6 xl:py-10">
          <ChartPlaceholder minHeight={220} />

          <MonitoringSection title="공급 이력">
            <div className="flex flex-col gap-6 lg:gap-4">
              <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-4 md:max-w-none">
                  <CustomLabel className="!min-w-auto" label="조회일자" />
                  <div className="flex gap-2 items-center grow">
                    <Input
                      id="date-pick"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="md:w-40 w-full "
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 md:max-w-none">
                  <CustomLabel className="!min-w-auto" label="조회기준" />
                  <div className="flex gap-2 items-center grow">
                    <Select
                      name="schStandard"
                      onChange={(e) => setSelectedSchStandard(e.target.value)}
                      value={selectedSchStandard}
                      options={[{ label: "일단위", value: "일단위" }]}
                      className="md:w-40 w-full"
                    />
                  </div>
                </div>

                <CustomBtn variant="primary" rightIcon={<Search size={16} />}>
                  조회하기
                </CustomBtn>
              </div>

              <DataTable>
                <DataTableHead>
                  <tr>
                    <DataTableTh className="min-w-40">공급일</DataTableTh>
                    <DataTableTh className="min-w-16">공급회차</DataTableTh>
                    <DataTableTh className="min-w-54">사료종류</DataTableTh>
                    <DataTableTh className="w-40">사료호수</DataTableTh>
                    <DataTableTh className="w-40">예상공급량(kg)</DataTableTh>
                    <DataTableTh className="w-40">실제공급량(kg)</DataTableTh>
                  </tr>
                </DataTableHead>

                <tbody>
                <tr>
                  <DataTableTd>
                    2025-05
                  </DataTableTd>
                  <DataTableTd>1</DataTableTd>
                  <DataTableTd>EP 플러스 광어</DataTableTd>
                  <DataTableTd>8호</DataTableTd>
                  <DataTableTd>10</DataTableTd>
                  <DataTableTd>10.5</DataTableTd>
                </tr>
                <tr>
                  <DataTableTd>
                    2025-05
                  </DataTableTd>
                  <DataTableTd>1</DataTableTd>
                  <DataTableTd>EP 플러스 광어</DataTableTd>
                  <DataTableTd>8호</DataTableTd>
                  <DataTableTd>10</DataTableTd>
                  <DataTableTd>10.5</DataTableTd>
                </tr>
                <tr>
                  <DataTableTd>
                    2025-05
                  </DataTableTd>
                  <DataTableTd>1</DataTableTd>
                  <DataTableTd>EP 플러스 광어</DataTableTd>
                  <DataTableTd>8호</DataTableTd>
                  <DataTableTd>10</DataTableTd>
                  <DataTableTd>10.5</DataTableTd>
                </tr>
                <tr>
                  <DataTableTd>
                    2025-05
                  </DataTableTd>
                  <DataTableTd>1</DataTableTd>
                  <DataTableTd>EP 플러스 광어</DataTableTd>
                  <DataTableTd>8호</DataTableTd>
                  <DataTableTd>10</DataTableTd>
                  <DataTableTd>10.5</DataTableTd>
                </tr>
                <tr>
                  <DataTableTd>
                    2025-05
                  </DataTableTd>
                  <DataTableTd>1</DataTableTd>
                  <DataTableTd>EP 플러스 광어</DataTableTd>
                  <DataTableTd>8호</DataTableTd>
                  <DataTableTd>10</DataTableTd>
                  <DataTableTd>10.5</DataTableTd>
                </tr>
                </tbody>

                <DataTableFoot>
                  <tr>
                    <DataTableTd colSpan={4}><strong>합계</strong></DataTableTd>
                    <DataTableTd>10</DataTableTd>
                    <DataTableTd>10.5</DataTableTd>
                  </tr>
                </DataTableFoot>
              </DataTable>
            </div>
          </MonitoringSection>
        </div>
      </div>
    </Container>
  );
}
