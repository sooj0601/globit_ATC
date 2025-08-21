import Container from "../components/layout/Container";
import PageTitle from "../components/module/PageTitle";
import CustomBadge from "../components/ui/CustomBadge";
import TankItem from "../components/module/TankItem";
import CustomBtn from "../components/ui/CustomBtn";


export default function TankMonitoring() {
  return (
    <Container>
      <PageTitle title="수조 모니터링" />
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          <TankItem tankName="1 고가수조"
            badges={
              <>
                <CustomBadge size="sm" variant="yellow">1000미</CustomBadge>
                <CustomBadge size="sm">광어</CustomBadge>
              </>
            }
            content={
              <p className="flex items-center gap-2 justify-between">
                <strong>평균무게</strong>
                <strong className="white">400 g</strong>
              </p>
            }
            buttons={
              <>
                <CustomBtn variant="primary" size="lg" className="flex-1">장비 제어</CustomBtn>
                <CustomBtn variant="secondary" size="lg" className="flex-1">사료공급 제어</CustomBtn>
              </>
            }
          />
          <TankItem tankName="1 고가수조"
                    badges={
                      <>
                        <CustomBadge size="sm" variant="yellow">1000미</CustomBadge>
                        <CustomBadge size="sm">광어</CustomBadge>
                      </>
                    }
                    content={
                      <p className="flex items-center gap-2 justify-between">
                        <strong>평균무게</strong>
                        <strong className="white">400 g</strong>
                      </p>
                    }
                    buttons={
                      <>
                        <CustomBtn variant="primary" size="lg" className="flex-1">장비 제어</CustomBtn>
                        <CustomBtn variant="secondary" size="lg" className="flex-1">사료공급 제어</CustomBtn>
                      </>
                    }
          />
          <TankItem tankName="1 고가수조"
                    badges={
                      <>
                        <CustomBadge size="sm" variant="yellow">1000미</CustomBadge>
                        <CustomBadge size="sm">광어</CustomBadge>
                      </>
                    }
                    content={
                      <p className="flex items-center gap-2 justify-between">
                        <strong>평균무게</strong>
                        <strong className="white">400 g</strong>
                      </p>
                    }
                    buttons={
                      <>
                        <CustomBtn variant="primary" size="lg" className="flex-1">장비 제어</CustomBtn>
                        <CustomBtn variant="secondary" size="lg" className="flex-1">사료공급 제어</CustomBtn>
                      </>
                    }
          />
          <TankItem tankName="1 고가수조"
                    badges={
                      <>
                        <CustomBadge size="sm" variant="yellow">1000미</CustomBadge>
                        <CustomBadge size="sm">광어</CustomBadge>
                      </>
                    }
                    content={
                      <p className="flex items-center gap-2 justify-between">
                        <strong>평균무게</strong>
                        <strong className="white">400 g</strong>
                      </p>
                    }
                    buttons={
                      <>
                        <CustomBtn variant="primary" size="lg" className="flex-1">장비 제어</CustomBtn>
                        <CustomBtn variant="secondary" size="lg" className="flex-1">사료공급 제어</CustomBtn>
                      </>
                    }
          />
          <TankItem tankName="1 고가수조"
                    badges={
                      <>
                        <CustomBadge size="sm" variant="yellow">1000미</CustomBadge>
                        <CustomBadge size="sm">광어</CustomBadge>
                      </>
                    }
                    content={
                      <p className="flex items-center gap-2 justify-between">
                        <strong>평균무게</strong>
                        <strong className="white">400 g</strong>
                      </p>
                    }
                    buttons={
                      <>
                        <CustomBtn variant="primary" size="lg" className="flex-1">장비 제어</CustomBtn>
                        {/*<CustomBtn variant="secondary" size="lg" className="flex-1">사료공급 제어</CustomBtn>*/}
                      </>
                    }
          />
          <TankItem tankName="1 고가수조"
                    badges={
                      <>
                        <CustomBadge size="sm" variant="yellow">1000미</CustomBadge>
                        <CustomBadge size="sm">광어</CustomBadge>
                      </>
                    }
                    content={
                      <p className="flex items-center gap-2 justify-between">
                        <strong>평균무게</strong>
                        <strong className="white">400 g</strong>
                      </p>
                    }
                    buttons={
                      <>
                        {/*<CustomBtn variant="primary" size="lg" className="flex-1">장비 제어</CustomBtn>*/}
                        <CustomBtn variant="secondary" size="lg" className="flex-1">사료공급 제어</CustomBtn>
                      </>
                    }
          />
          <TankItem tankName="1 고가수조"
                      badges={
                        <>
                          <CustomBadge size="sm" variant="yellow">1000미</CustomBadge>
                          <CustomBadge size="sm">광어</CustomBadge>
                        </>
                      }
                      content={
                        <p className="flex items-center gap-2 justify-between">
                          <strong>평균무게</strong>
                          <strong className="white">400 g</strong>
                        </p>
                      }
                      buttons={
                        <>
                          <CustomBtn variant="primary" size="lg" className="flex-1">장비 제어</CustomBtn>
                          <CustomBtn variant="secondary" size="lg" className="flex-1">사료공급 제어</CustomBtn>
                        </>
                      }
          />
          <TankItem tankName="1 고가수조"
                    badges={
                      <>
                        <CustomBadge size="sm" variant="yellow">1000미</CustomBadge>
                        <CustomBadge size="sm">광어</CustomBadge>
                      </>
                    }
                    content={
                      <p className="flex items-center gap-2 justify-between">
                        <strong>평균무게</strong>
                        <strong className="white">400 g</strong>
                      </p>
                    }
                    buttons={
                      <>
                        <CustomBtn variant="primary" size="lg" className="flex-1">장비 제어</CustomBtn>
                        <CustomBtn variant="secondary" size="lg" className="flex-1">사료공급 제어</CustomBtn>
                      </>
                    }
        />



        </div>
      </div>
    </Container>
  );
}
