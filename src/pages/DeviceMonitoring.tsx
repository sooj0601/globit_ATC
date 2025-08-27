import {useEffect, useState} from "react";
import {MapPin, Loader, PanelRightOpen, CircleAlert} from 'lucide-react';
import Container from '../components/layout/Container';
import Switch from '../components/ui/Switch';
import TankStatusItem from '../components/module/TankStatusItem';
import DeviceStatusItem from '../components/module/DeviceStatusItem';
import MonitoringSection from '../components/ui/MonitoringSection';
import StatusChip from '../components/module/StatusChip';
import ConditionChipGroup from '../components/module/ConditionChipGroup';
import ConditionChip from '../components/module/ConditionChip';
import {TankBadge} from '../components/module/TankBadge';
import TabBtn from '../components/ui/TabBtn';
import ImgTankDevice from '../assets/imgs/tank-device.png';
import { IconDo, IconTemp, IconPsu, IconPh } from '../assets/icons';
import PageTitle from "../components/module/PageTitle.tsx";
import Toast from "../components/ui/Toast.tsx";
import LogList from "../components/module/LogList.tsx";
import FAB from "../components/module/FAB.tsx";
import Drawer from "../components/ui/Drawer.tsx";
import FeedSupplySchedule from "../components/module/FeedSupplySchedule.tsx";
import Select from "../components/ui/Select.tsx";
import Input from "../components/ui/Input.tsx";

export default function DeviceMonitoring() {
  const [selectedHour, setSelectedHour] = useState('08');
  const [selectedMinute, setSelectedMinute] = useState('00');
  const [enabled, setEnabled] = useState(true);
  const [valve1, setValve1] = useState<'ON'|'OFF'>('ON');
  const [valve2, setValve2] = useState<'ON'|'OFF'>('OFF');
  const [valve3, setValve3] = useState<'ON'|'OFF'>('ON');
  const [valve4, setValve4] = useState<'ON'|'OFF'>('ON');
  const [valve5, setValve5] = useState<'ON'|'OFF'>('OFF');
  const [valve6, setValve6] = useState<'ON'|'OFF'>('ON');
  const [valve7, setValve7] = useState<'ON'|'OFF'>('ON');
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    setShowToast(true);
  }, []);

  return (
    <Container>
      {showToast && (
        <Toast duration={6000} position="top" onClose={() => setShowToast(false)}>
          <LogList
            logs={[
              {
                message: "드럼필터 오염도가 감지되어 청소 밸브를 작동하였습니다.",
              },
              { time: "13:00", message: "급이기를 작동하였습니다." },
              {
                message: "고수온이 예측되어 냉각기를 작동하였습니다.",
              },
            ]}
          />
        </Toast>
      )}
      <FAB onClick={() => setOpen(true)}>
        <PanelRightOpen className="size-5" />
        <p>급이스케쥴</p>
      </FAB>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        side="right"          // 데스크톱 기본 방향
        mobileSide="bottom"   // 모바일에서는 아래에서 열림
        title="급이 스케쥴"
        widthClass="w-[460px]"
        heightClass="h-[70vh]"
      >
        <p className="flex items-center gap-1 text-rose-500 font-bold mb-4 pb-2 border-b p-2 border-b-slate-700 text-sm md:text-base">
          <CircleAlert size={16} />
          <span>인공지능 모드에 의해 급이 스케쥴이 변경되었습니다.</span>
        </p>
        <p className="flex items-center gap-1 bg-slate-300/15 p-2 rounded-lg text-sm md:text-base">
          <span>급이가 완료된 스케쥴의 회차는 <strong className="text-green-400 font-bold">초록색</strong>으로 표시됩니다.</span>
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <FeedSupplySchedule label="1회차" direction="column" active>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
              <div className="flex items-center gap-4">
                <strong className="text-nowrap">시간</strong>
                <div className="flex items-center gap-2">
                  <Select
                    name="feedHour"
                    onChange={(e) => setSelectedHour(e.target.value)}
                    value={selectedHour}
                    options={[
                      { label: '08', value: '08'},
                    ]}
                    className="w-[64px]"
                    readOnly
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
                    readOnly
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-nowrap">공급량</strong>
                <div>
                  <Input type="text" unit="kg" number value="12.3" className="w-24" readOnly/>
                </div>
              </div>
            </div>
          </FeedSupplySchedule>
          <FeedSupplySchedule label="1회차" direction="column" active>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
              <div className="flex items-center gap-4">
                <strong className="text-nowrap">시간</strong>
                <div className="flex items-center gap-2">
                  <Select
                    name="feedHour"
                    onChange={(e) => setSelectedHour(e.target.value)}
                    value={selectedHour}
                    options={[
                      { label: '08', value: '08'},
                    ]}
                    className="w-[64px]"
                    readOnly
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
                    readOnly
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-nowrap">공급량</strong>
                <div>
                  <Input type="text" unit="kg" number value="12.3" className="w-24" readOnly/>
                </div>
              </div>
            </div>
          </FeedSupplySchedule>
          <FeedSupplySchedule label="1회차" direction="column">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
              <div className="flex items-center gap-4">
                <strong className="text-nowrap">시간</strong>
                <div className="flex items-center gap-2">
                  <Select
                    name="feedHour"
                    onChange={(e) => setSelectedHour(e.target.value)}
                    value={selectedHour}
                    options={[
                      { label: '08', value: '08'},
                    ]}
                    className="w-[64px]"
                    readOnly
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
                    readOnly
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-nowrap">공급량</strong>
                <div>
                  <Input type="text" unit="kg" number value="12.3" className="w-24" readOnly/>
                </div>
              </div>
            </div>
          </FeedSupplySchedule>
          <FeedSupplySchedule label="1회차" direction="column">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
              <div className="flex items-center gap-4">
                <strong className="text-nowrap">시간</strong>
                <div className="flex items-center gap-2">
                  <Select
                    name="feedHour"
                    onChange={(e) => setSelectedHour(e.target.value)}
                    value={selectedHour}
                    options={[
                      { label: '08', value: '08'},
                    ]}
                    className="w-[64px]"
                    readOnly
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
                    readOnly
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-nowrap">공급량</strong>
                <div>
                  <Input type="text" unit="kg" number value="12.3" className="w-24" readOnly/>
                </div>
              </div>
            </div>
          </FeedSupplySchedule>
          <FeedSupplySchedule label="1회차" direction="column">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
              <div className="flex items-center gap-4">
                <strong className="text-nowrap">시간</strong>
                <div className="flex items-center gap-2">
                  <Select
                    name="feedHour"
                    onChange={(e) => setSelectedHour(e.target.value)}
                    value={selectedHour}
                    options={[
                      { label: '08', value: '08'},
                    ]}
                    className="w-[64px]"
                    readOnly
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
                    readOnly
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-nowrap">공급량</strong>
                <div>
                  <Input type="text" unit="kg" number value="12.3" className="w-24" readOnly/>
                </div>
              </div>
            </div>
          </FeedSupplySchedule>
          <FeedSupplySchedule label="1회차" direction="column">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
              <div className="flex items-center gap-4">
                <strong className="text-nowrap">시간</strong>
                <div className="flex items-center gap-2">
                  <Select
                    name="feedHour"
                    onChange={(e) => setSelectedHour(e.target.value)}
                    value={selectedHour}
                    options={[
                      { label: '08', value: '08'},
                    ]}
                    className="w-[64px]"
                    readOnly
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
                    readOnly
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-nowrap">공급량</strong>
                <div>
                  <Input type="text" unit="kg" number value="12.3" className="w-24" readOnly/>
                </div>
              </div>
            </div>
          </FeedSupplySchedule>
        </div>
      </Drawer>
      <PageTitle title="장비제어 모니터링" />
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-b-slate-700">
          <h3 className="flex justify-start items-center gap-2 w-full lg:w-auto h-12 xl:h-16">
            <MapPin size={24} className="text-indigo-300"/>
            <p className="text-lg xl:text-xl font-bold">2 고가수조 <span>(RAS-A-00023)</span></p>
          </h3>
          <div className="flex justify-end items-stretch h-12 xl:h-16 w-full lg:w-auto">
            <TabBtn text="제어 화면" className="grow" active />
            <TabBtn text="제어 이력" className="grow" />
          </div>
        </div>
        <div className="flex items-start lg:justify-between grow lg:gap-8 xl:gap-28 pt-6 pb-24 xl:py-10 ">
          <div className="flex flex-col shrink-0 w-full lg:w-72 xl:w-80 lg:h-full gap-4 xl:gap-8 lg:scroll-auto">
            <div className="flex items-center justify-between w-full h-12 xl:h-14 p-4 rounded-2xl border border-indigo-300">
              <strong className="text-indigo-300 font-bold">인공지능 모드</strong>
              <Switch checked={enabled} onChange={setEnabled} />
            </div>
            <MonitoringSection title="수조 현재 상태" titleDesc={
              <div className="flex justify-end items-center gap-3">
                <StatusChip variant="green" text="양호" />
                <StatusChip variant="red" text="위험" />
              </div>
              }>
              <div className="grid grid-cols-2 gap-2 xl:gap-4">
                <TankStatusItem
                  title="온도"
                  icon={<IconTemp className="size-6 text-slate-300" />}
                  value={15}
                  unit="℃"
                  valueColor="red"
                />
                <TankStatusItem
                  title="Do"
                  icon={<IconDo className="size-6 text-slate-300" />}
                  value={6.2}
                  unit="ppm"
                  valueColor="green"
                />
                <TankStatusItem
                  title="pH"
                  icon={<IconPh className="size-6 text-slate-300" />}
                  value={30}
                  unit="ph"
                  valueColor="green"
                />
                <TankStatusItem
                  title="염분"
                  icon={<IconPsu className="size-6 text-slate-300" />}
                  value={7.8}
                  unit="PSU"
                  valueColor="red"
                />
              </div>
            </MonitoringSection>
            <MonitoringSection title="드럼필터/포말관리기 상태">
              <div className="flex flex-col gap-2 xl:gap-4">
                <DeviceStatusItem
                  title="드럼필터 오염도"
                  condition={
                    <ConditionChipGroup>
                      <ConditionChip text="양호" active/>
                      <ConditionChip text="청소필요" />
                    </ConditionChipGroup>
                  }
                />
                <DeviceStatusItem
                  title="포말분리기 물넘침"
                  condition={
                    <ConditionChipGroup>
                      <ConditionChip text="양호"/>
                      <ConditionChip text="물넘침" active/>
                    </ConditionChipGroup>
                  }
                />
              </div>
            </MonitoringSection>
            <MonitoringSection title="생물학적 여과조 상태">
              <div className="flex flex-col gap-2 xl:gap-4">
                <TankStatusItem
                  title="아질산 수치"
                  value={15}
                  unit="ml"
                  valueColor="red"
                  variant="row"
                />
              </div>
            </MonitoringSection>
            <MonitoringSection title="다음 급이 스케쥴">
              <div className="flex flex-col gap-2 xl:gap-4">
                <TankStatusItem
                  title="13:00"
                  value={10}
                  unit="kg"
                  variant="row"
                  deviceStatus="None"
                />
              </div>
            </MonitoringSection>
            <MonitoringSection title="밸브 제어" className="lg:hidden">
              <div className="flex flex-col gap-2 xl:gap-4">
                <div className="flex items-center gap-2 text-indigo-200">
                  <Loader size={18} className="animate-spin" />
                  <p>인공지능 모드로 제어중 입니다.</p>
                </div>
                <TankStatusItem
                  title="수온제어"
                  value={15}
                  unit="℃"
                  variant="row"
                  deviceStatus={valve1}
                  onToggle={(next) => setValve1(next)}
                  aiMode={false}
                />
                <TankStatusItem
                  title="Do제어"
                  value={15}
                  unit="ppm"
                  variant="row"
                  deviceStatus={valve2}
                  onToggle={(next) => setValve2(next)}
                />
                <TankStatusItem
                  title="pH제어"
                  value={15}
                  unit="pH"
                  variant="row"
                  deviceStatus={valve3}
                  onToggle={(next) => setValve3(next)}
                />
                <TankStatusItem
                  title="염분제어"
                  value={15}
                  unit="PSU"
                  variant="row"
                  deviceStatus={valve4}
                  onToggle={(next) => setValve4(next)}
                />
                <TankStatusItem
                  title="아질산 제어밸브"
                  variant="row"
                  deviceStatus={valve5}
                  onToggle={(next) => setValve5(next)}
                />
                <TankStatusItem
                  title="포말분리기 관리밸브"
                  variant="row"
                  deviceStatus={valve6}
                  onToggle={(next) => setValve6(next)}
                />
                <TankStatusItem
                  title="드럼필터 청소밸브"
                  variant="row"
                  deviceStatus={valve7}
                  onToggle={(next) => setValve7(next)}
                />
              </div>
            </MonitoringSection>
          </div>
          <div className="relative grow hidden lg:block">
            <div className="absolute right-0 flex justify-end items-center gap-2 text-indigo-300">
              <Loader size={18} className="animate-spin" />
              <p>인공지능 모드로 제어중 입니다.</p>
            </div>
            <img src={ImgTankDevice} alt="Tank Device" className="w-full"/>
            <TankBadge
              top="top-[60%]" left="left-[10%]"
              label="수온제어"
              value="15"
              unit="℃"
              deviceStatus={valve1}
              aiMode={false} // 인공지능 모드가 아닐 때는 스위치로 제어
              onToggle={(next) => setValve1(next)}
            />
            <TankBadge
              top="top-[67%]" left="left-[25%]"
              label="Do제어"
              value="15"
              unit="ppm"
              deviceStatus={valve2}
              aiMode={true}
              onToggle={(next) => setValve2(next)}
            />
            <TankBadge
              top="top-[74%]" left="left-[40%]"
              label="pH제어"
              value="15"
              unit="pH"
              deviceStatus={valve3}
              aiMode={true}
              onToggle={(next) => setValve3(next)}
            />
            <TankBadge
              top="top-[81%]" left="left-[55%]"
              label="염분제어"
              value="15"
              unit="PSU"
              deviceStatus={valve4}
              aiMode={true}
              onToggle={(next) => setValve4(next)}
            />
            <TankBadge
              top="top-[15%]" left="left-[20%]"
              label="아질산 제어밸브"
              deviceStatus={valve5}
              aiMode={true}
              onToggle={(next) => setValve5(next)}
            />
            <TankBadge
              top="top-[26%]" left="left-[50%]"
              label="포말분리기 관리밸브"
              deviceStatus={valve6}
              aiMode={true}
              onToggle={(next) => setValve6(next)}
            />
            <TankBadge
              top="top-[18%]" left="left-[75%]"
              label="드럼필터 청소밸브"
              deviceStatus={valve7}
              aiMode={true}
              onToggle={(next) => setValve7(next)}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
