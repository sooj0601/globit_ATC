import {useState} from "react";
import Container from '../components/layout/Container';
import { MapPin } from 'lucide-react';
import TabBtn from '../components/ui/TabBtn';
import PageTitle from "../components/module/PageTitle.tsx";
import MonitoringSection from '../components/ui/MonitoringSection';
import InputGroup from '../components/ui/InputGroup';
import InputSet from '../components/ui/InputSet';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import SegmentedRadioGroup from '../components/ui/SegmentedRadioGroup';
import FeedSupplySchedule from '../components/module/FeedSupplySchedule.tsx';
import CustomBtn from '../components/ui/CustomBtn';
import { Plus } from 'lucide-react';
import BtnWrap from "../components/module/BtnWrap.tsx";

export default function FeedSupplySetting() {
  const [mode, setMode] = useState("b");
  const [selectedFeedName, setSelectedFeedName] = useState('EP 플러스');
  const [selectedFeedType, setSelectedFeedType] = useState('8호');
  const [selectedHour, setSelectedHour] = useState('08');
  const [selectedMinute, setSelectedMinute] = useState('00');
  return (
    <Container>
      <PageTitle title="사료 공급 모니터링" />
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-b-slate-700">
          <h3 className="flex justify-start items-center gap-2 w-full lg:w-auto h-12 xl:h-16">
            <MapPin size={24} className="text-indigo-300"/>
            <p className="text-lg xl:text-xl font-bold">2 고가수조 <span>(RAS-A-00023)</span></p>
          </h3>
          <div className="flex justify-end items-stretch h-12 xl:h-16 w-full lg:w-auto">
            <TabBtn text="사료공급 모니터링" className="grow" />
            <TabBtn text="사료공급 환경설정" className="grow" active />
            <TabBtn text="사료공급 이력" className="grow" />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 2xl:gap-28 py-6 xl:py-10">
          <div className="flex flex-col gap-8 xl:gap-10">
            <MonitoringSection title="공급모드 선택">
              <SegmentedRadioGroup
                name="mode"
                value={mode}
                onChange={setMode}
                options={[
                  { label: "인공지능 모드", value: "a" },
                  { label: "먹이활성도 모드", value: "b" },
                  { label: "수동 모드", value: "c" },
                ]}
              />
            </MonitoringSection>
            <MonitoringSection title="공급계획 설정">
              <div className="flex flex-col gap-2">
                <FeedSupplySchedule label="1회차 공급계획">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                    <div className="flex items-center gap-4">
                      <strong className="2xl:w-16 text-nowrap">시간</strong>
                      <div className="flex items-center gap-2">
                        <Select
                          name="feedHour"
                          onChange={(e) => setSelectedHour(e.target.value)}
                          value={selectedHour}
                          options={[
                            { label: '08', value: '08'},
                          ]}
                          className="w-[64px]"
                        />
                        :
                        <Select
                          name="feedMinute"
                          onChange={(e) => setSelectedMinute(e.target.value)}
                          value={selectedMinute}
                          options={[
                            { label: '00', value: '00'},
                          ]}
                          className="w-[64px]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <strong className="2xl:w-16 text-nowrap">공급량</strong>
                      <div>
                        <Input type="text" unit="kg" number value="12.3" className="w-24"/>
                      </div>
                    </div>
                  </div>
                </FeedSupplySchedule>
                <FeedSupplySchedule label="1회차 공급계획" delBtn>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                    <div className="flex items-center gap-4">
                      <strong className="2xl:w-16 text-nowrap">시간</strong>
                      <div className="flex items-center gap-2">
                        <Select
                          name="feedHour"
                          onChange={(e) => setSelectedHour(e.target.value)}
                          value={selectedHour}
                          options={[
                            { label: '08', value: '08'},
                          ]}
                          className="w-[64px]"
                        />
                        :
                        <Select
                          name="feedMinute"
                          onChange={(e) => setSelectedMinute(e.target.value)}
                          value={selectedMinute}
                          options={[
                            { label: '00', value: '00'},
                          ]}
                          className="w-[64px]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <strong className="2xl:w-16 text-nowrap">공급량</strong>
                      <div>
                        <Input type="text" unit="kg" number value="12.3" className="w-24"/>
                      </div>
                    </div>
                  </div>
                </FeedSupplySchedule>
                <CustomBtn variant="ghost" size="lg" className="w-full lg:mt-4" rightIcon={<Plus size={16}/>}>공급계획 추가하기</CustomBtn>
              </div>
            </MonitoringSection>
          </div>
          <div className="flex flex-col">
            <MonitoringSection title="공급 정보">
              <InputGroup>
                <InputSet label="어종">
                  <Input type="text" readOnly value="광어" className="grow" />
                </InputSet>
                <InputSet label="미수">
                  <Input type="text" readOnly unit="미" number value="9,000,000" className="grow" />
                </InputSet>
                <InputSet label="입식일">
                  <Input type="text" readOnly value="2023-10-20" className="grow"/>
                </InputSet>
                <InputSet label="평균체중">
                  <Input type="text" readOnly unit="kg" number value="12.3" className="grow"/>
                </InputSet>
                <InputSet label="사료종류">
                  <Select
                    name="feedName"
                    className="grow"
                    onChange={(e) => setSelectedFeedName(e.target.value)}
                    value={selectedFeedName}
                    options={[
                      { label: 'EP 플러스', value: 'EP 플러스'},
                    ]}
                  />
                </InputSet>
                <InputSet label="사료 호수">
                  <Select
                    name="feedType"
                    className="grow"
                    onChange={(e) => setSelectedFeedType(e.target.value)}
                    value={selectedFeedType}
                    options={[
                      { label: '8호', value: '8호'},
                    ]}
                  />
                </InputSet>
              </InputGroup>
            </MonitoringSection>
          </div>
        </div>
        <BtnWrap lineTop>
          <span className="text-slate-500 text-sm">수정된 공급정보에 맞는 공급계획은 내일부터 반영됩니다.</span>
          <div className="flex flex-col w-full md:w-auto md:flex-row items-center gap-2">
            <CustomBtn size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto" >적용하기</CustomBtn>
            <CustomBtn size="lg" className="grow w-full md:grow-0 md:w-auto">초기화</CustomBtn>
          </div>
        </BtnWrap>
      </div>
    </Container>
  );
}
