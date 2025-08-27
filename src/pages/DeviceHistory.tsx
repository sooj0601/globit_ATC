import { useState } from "react";
import Container from "../components/layout/Container";
import {Download, MapPin} from "lucide-react";
import TabBtn from "../components/ui/TabBtn";
import PageTitle from "../components/module/PageTitle";
import MonitoringSection from "../components/ui/MonitoringSection";
import CustomLabel from "../components/ui/CustomLabel";
import Input from "../components/ui/Input";
import DownloadItem from "../components/module/DownloadItem";
import CustomBtn from "../components/ui/CustomBtn.tsx";

function getLocalDate() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function DeviceHistory() {
  const [selectedDate, setSelectedDate] = useState<string>(getLocalDate());

  return (
    <Container>
      <PageTitle title="장비 제어 모니터링" />
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-b-slate-700">
          <h3 className="flex justify-start items-center gap-2 w-full lg:w-auto h-12 xl:h-16">
            <MapPin size={24} className="text-indigo-300"/>
            <p className="text-lg xl:text-xl font-bold">2 고가수조 <span>(RAS-A-00023)</span></p>
          </h3>
          <div className="flex justify-end items-stretch h-12 xl:h-16 w-full lg:w-auto">
            <TabBtn text="제어 화면" className="grow" />
            <TabBtn text="제어 이력" className="grow" active />
          </div>
        </div>

        <div className="flex flex-col gap-8 py-6 xl:py-10">

          <MonitoringSection>
            <div className="flex items-center gap-4 md:max-w-none">
              <CustomLabel className="!min-w-auto" label="날짜 선택" />
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
          </MonitoringSection>
          <MonitoringSection title="로그 파일 다운로드">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4">
              <DownloadItem
                title="장비 제어 로그"
                button={
                  <CustomBtn size="sm" variant="primary" leftIcon={<Download size={16} />}>다운로드</CustomBtn>
                }
              />
              <DownloadItem
                title="수질 예측 로그"
                button={
                  <CustomBtn size="sm" variant="primary" leftIcon={<Download size={16} />}>다운로드</CustomBtn>
                }
              />
              <DownloadItem
                title="포말분리기 로그"
                button={
                  <CustomBtn size="sm" variant="primary" leftIcon={<Download size={16} />}>다운로드</CustomBtn>
                }
              />
              <DownloadItem
                title="드럼필터 로그"
                button={
                  <CustomBtn size="sm" variant="primary" leftIcon={<Download size={16} />}>다운로드</CustomBtn>
                }
              />
              <DownloadItem
                title="최적 급이 분석 로그"
                button={
                  <CustomBtn size="sm" variant="primary" leftIcon={<Download size={16} />}>다운로드</CustomBtn>
                }
              />
            </div>
          </MonitoringSection>
        </div>
      </div>
    </Container>
  );
}
