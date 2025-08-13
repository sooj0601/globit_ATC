import {useState} from "react";
import { MapPin, Loader } from 'lucide-react';
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

export default function DeviceMonitoring() {
  const [enabled, setEnabled] = useState(true);
  const [valve1, setValve1] = useState<'ON'|'OFF'>('ON');
  const [valve2, setValve2] = useState<'ON'|'OFF'>('OFF');
  const [valve3, setValve3] = useState<'ON'|'OFF'>('ON');
  const [valve4, setValve4] = useState<'ON'|'OFF'>('ON');
  const [valve5, setValve5] = useState<'ON'|'OFF'>('OFF');
  const [valve6, setValve6] = useState<'ON'|'OFF'>('ON');
  const [valve7, setValve7] = useState<'ON'|'OFF'>('ON');
  return (
    <section className="flex flex-col items-stretch mx-auto px-4 lg:px-6">
      <h2 className="flex justify-between items-center py-2 lg:py-4 text-xl lg:text-2xl font-bold text-indigo-500">장비 제어 모니터링</h2>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-b-slate-700">
          <h3 className="flex justify-start items-center gap-2 w-full lg:w-auto h-12 lg:h-16">
            <MapPin size={24} className="text-indigo-300"/>
            <p className="text-lg lg:text-xl font-bold">2 고가수조 <span>(RAS-A-00023)</span></p>
          </h3>
          <div className="flex justify-end items-stretch h-12 lg:h-16 w-full lg:w-auto">
            <TabBtn text="제어 화면" className="grow" active />
            <TabBtn text="제어 이력" className="grow" />
          </div>
        </div>
        <div className="flex items-stretch lg:justify-between lg:gap-28 py-8 lg:py-10">
          <div className="flex flex-col shrink-0 w-full lg:w-80 gap-6 lg:gap-8">
            <div className="flex items-center justify-between w-full min-h-14 p-4 rounded-2xl border border-indigo-300">
              <strong className="text-indigo-300 font-bold">인공지능 모드</strong>
              <Switch checked={enabled} onChange={setEnabled} />
            </div>
            <MonitoringSection title="수조 현재 상태" titleDesc={
              <div className="flex justify-end items-center gap-3">
                <StatusChip variant="green" text="양호" />
                <StatusChip variant="red" text="위험" />
              </div>
              }>
              <div className="grid grid-cols-2 gap-4">
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
              <div className="flex flex-col gap-4">
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
              <div className="flex flex-col gap-4">
                <TankStatusItem
                  title="아질산 수치"
                  icon={<IconPsu className="size-6 text-slate-300" />}
                  value={15}
                  unit="ml"
                  valueColor="red"
                  variant="row"
                />
              </div>
            </MonitoringSection>
            <MonitoringSection title="밸브 제어" className="lg:hidden">
              <div className="flex flex-col gap-4">
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
              top="top-[60%]" left="left-[14%]"
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
              top="top-[74%]" left="left-[36%]"
              label="pH제어"
              value="15"
              unit="pH"
              deviceStatus={valve3}
              aiMode={true}
              onToggle={(next) => setValve3(next)}
            />
            <TankBadge
              top="top-[81%]" left="left-[48%]"
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
    </section>
  );
}
