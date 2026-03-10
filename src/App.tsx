import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/context/AppContext";
import AppLayout from "@/components/AppLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Trainings
import TrainingSessions from "./pages/trainings/Sessions";
import TrainingBrowser from "./pages/trainings/Browser";
import TrainingInternal from "./pages/trainings/Internal";
import TrainingByUser from "./pages/trainings/ByUser";
import TrainingByJobPosition from "./pages/trainings/ByJobPosition";
import TrainingReports from "./pages/trainings/Reports";

// Employment History
import EmploymentHistory from "./pages/EmploymentHistory";

// Induction
import NewInduction from "./pages/induction/NewInduction";
import InductionByJobPosition from "./pages/induction/ByJobPosition";
import InductionCatalogActivities from "./pages/induction/CatalogActivities";
import InductionCatalogInductions from "./pages/induction/CatalogInductions";
import InductionCatalogByJobPosition from "./pages/induction/CatalogByJobPosition";
import InductionReport from "./pages/induction/Report";

// Evaluations
import EvaluationsBrowser from "./pages/evaluations/Browser";
import EvaluationsIndicators from "./pages/evaluations/Indicators";
import EvaluationsSurveysBrowser from "./pages/evaluations/SurveysBrowser";
import EvaluationsSurveysResults from "./pages/evaluations/SurveysResults";
import EvaluationsAreasByUser from "./pages/evaluations/AreasByUser";
import EvaluationsAreasByJob from "./pages/evaluations/AreasByJob";
import EvaluationsCoursesReport from "./pages/evaluations/CoursesReport";

// Efficiencies
import EfficienciesGoals from "./pages/efficiencies/Goals";
import EfficienciesGoalsByUser from "./pages/efficiencies/GoalsByUser";
import EfficienciesByUser from "./pages/efficiencies/ByUser";
import EfficienciesReports from "./pages/efficiencies/Reports";
import EfficienciesYearlyReport from "./pages/efficiencies/YearlyReport";

// Support
import SupportAdmonition from "./pages/support/Admonition";
import SupportUniformsList from "./pages/support/UniformsList";
import SupportUniformsByPR from "./pages/support/UniformsByPR";
import SupportUniformsMovements from "./pages/support/UniformsMovements";
import SupportVacationsBenefits from "./pages/support/VacationsBenefits";
import SupportVacationsReport from "./pages/support/VacationsReport";
import SupportEmployeeCardRFID from "./pages/support/EmployeeCardRFID";
import SupportMeetingsSessions from "./pages/support/MeetingsSessions";
import SupportSurveysBrowser from "./pages/support/SurveysBrowser";
import SupportSurveysCampaign from "./pages/support/SurveysCampaign";
import SupportSurveysResults from "./pages/support/SurveysResults";
import SupportSixteenFP from "./pages/support/SixteenFP";
import SupportFlexBenefitsBrowser from "./pages/support/FlexBenefitsBrowser";
import SupportFlexBenefitsPeriods from "./pages/support/FlexBenefitsPeriods";
import SupportFlexBenefitsReports from "./pages/support/FlexBenefitsReports";

// Catalogs
import CatalogsUsers from "./pages/catalogs/Users";
import CatalogsJobPositions from "./pages/catalogs/JobPositions";
import CatalogsAreas from "./pages/catalogs/Areas";
import CatalogsGroups from "./pages/catalogs/Groups";
import CatalogsUniformsByJobPosition from "./pages/catalogs/UniformsByJobPosition";
import CatalogsSBU from "./pages/catalogs/SBU";
import CatalogsManagerBrowser from "./pages/catalogs/ManagerBrowser";

// Loans
import LoanBrowser from "./pages/loans/LoanBrowser";
import LoanMovementHistory from "./pages/loans/MovementHistory";

// Competencies
import CompetenciesByJobPosition from "./pages/competencies/ByJobPosition";
import CompetenciesNew from "./pages/competencies/NewCompetency";
import CompetenciesNewMatrix from "./pages/competencies/NewMatrix";
import CompetenciesCatalog from "./pages/competencies/CatalogCompetencies";
import CompetenciesCatalogByJob from "./pages/competencies/CatalogByJobPosition";
import CompetenciesCatalogMatrix from "./pages/competencies/CatalogMatrix";
import CompetenciesCatalogBehaviors from "./pages/competencies/CatalogBehaviors";
import CompetenciesCatalogCriterias from "./pages/competencies/CatalogCriterias";
import CompetenciesReportByUser from "./pages/competencies/ReportByUser";
import CompetenciesReport from "./pages/competencies/ReportCompetencies";
import CompetenciesReportMatrix from "./pages/competencies/ReportMatrix";

// Rewards
import PersalRewards from "./pages/PersalRewards";

// Safety
import SafetyRegisterAccident from "./pages/safety/RegisterAccident";
import SafetyReportAccidents from "./pages/safety/ReportAccidents";
import SafetyInjuriesData from "./pages/safety/InjuriesData";

// Others
import OthersEmailPassword from "./pages/others/EmailPassword";
import OthersTelephoneExtensions from "./pages/others/TelephoneExtensions";
import OthersITServices from "./pages/others/ITServices";

// Revalidations
import PendingRevalidations from "./pages/revalidations/PendingRevalidations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Index />} />

              {/* Revalidations */}
              <Route path="/revalidations" element={<PendingRevalidations />} />

              {/* Trainings */}
              <Route path="/trainings/sessions" element={<TrainingSessions />} />
              <Route path="/trainings/browser" element={<TrainingBrowser />} />
              <Route path="/trainings/internal" element={<TrainingInternal />} />
              <Route path="/trainings/by-user" element={<TrainingByUser />} />
              <Route path="/trainings/by-position" element={<TrainingByJobPosition />} />
              <Route path="/trainings/reports" element={<TrainingReports />} />

              {/* Employment History */}
              <Route path="/employment-history" element={<EmploymentHistory />} />

              {/* Induction */}
              <Route path="/induction/new" element={<NewInduction />} />
              <Route path="/induction/by-job-position" element={<InductionByJobPosition />} />
              <Route path="/induction/catalog/activities" element={<InductionCatalogActivities />} />
              <Route path="/induction/catalog/inductions" element={<InductionCatalogInductions />} />
              <Route path="/induction/catalog/by-job-position" element={<InductionCatalogByJobPosition />} />
              <Route path="/induction/report" element={<InductionReport />} />

              {/* Evaluations */}
              <Route path="/evaluations/browser" element={<EvaluationsBrowser />} />
              <Route path="/evaluations/indicators" element={<EvaluationsIndicators />} />
              <Route path="/evaluations/surveys/browser" element={<EvaluationsSurveysBrowser />} />
              <Route path="/evaluations/surveys/results" element={<EvaluationsSurveysResults />} />
              <Route path="/evaluations/areas-by-user" element={<EvaluationsAreasByUser />} />
              <Route path="/evaluations/areas-by-job" element={<EvaluationsAreasByJob />} />
              <Route path="/evaluations/courses-report" element={<EvaluationsCoursesReport />} />

              {/* Efficiencies */}
              <Route path="/efficiencies/goals" element={<EfficienciesGoals />} />
              <Route path="/efficiencies/goals-by-user" element={<EfficienciesGoalsByUser />} />
              <Route path="/efficiencies/by-user" element={<EfficienciesByUser />} />
              <Route path="/efficiencies/reports" element={<EfficienciesReports />} />
              <Route path="/efficiencies/yearly-report" element={<EfficienciesYearlyReport />} />

              {/* Support */}
              <Route path="/support/admonition" element={<SupportAdmonition />} />
              <Route path="/support/uniforms" element={<SupportUniformsList />} />
              <Route path="/support/uniforms-by-pr" element={<SupportUniformsByPR />} />
              <Route path="/support/uniforms-movements" element={<SupportUniformsMovements />} />
              <Route path="/support/vacations/benefits" element={<SupportVacationsBenefits />} />
              <Route path="/support/vacations/report" element={<SupportVacationsReport />} />
              <Route path="/support/rfid" element={<SupportEmployeeCardRFID />} />
              <Route path="/support/meetings" element={<SupportMeetingsSessions />} />
              <Route path="/support/surveys/browser" element={<SupportSurveysBrowser />} />
              <Route path="/support/surveys/campaign" element={<SupportSurveysCampaign />} />
              <Route path="/support/surveys/results" element={<SupportSurveysResults />} />
              <Route path="/support/16fp" element={<SupportSixteenFP />} />
              <Route path="/support/flex-benefits/browser" element={<SupportFlexBenefitsBrowser />} />
              <Route path="/support/flex-benefits/periods" element={<SupportFlexBenefitsPeriods />} />
              <Route path="/support/flex-benefits/reports" element={<SupportFlexBenefitsReports />} />

              {/* Catalogs */}
              <Route path="/catalogs/users" element={<CatalogsUsers />} />
              <Route path="/catalogs/job-positions" element={<CatalogsJobPositions />} />
              <Route path="/catalogs/areas" element={<CatalogsAreas />} />
              <Route path="/catalogs/groups" element={<CatalogsGroups />} />
              <Route path="/catalogs/uniforms-by-position" element={<CatalogsUniformsByJobPosition />} />
              <Route path="/catalogs/sbu" element={<CatalogsSBU />} />
              <Route path="/catalogs/managers" element={<CatalogsManagerBrowser />} />

              {/* Loans */}
              <Route path="/loans/browser" element={<LoanBrowser />} />
              <Route path="/loans/movement-history" element={<LoanMovementHistory />} />

              {/* Competencies */}
              <Route path="/competencies/by-job-position" element={<CompetenciesByJobPosition />} />
              <Route path="/competencies/new" element={<CompetenciesNew />} />
              <Route path="/competencies/new-matrix" element={<CompetenciesNewMatrix />} />
              <Route path="/competencies/catalog" element={<CompetenciesCatalog />} />
              <Route path="/competencies/catalog-by-job" element={<CompetenciesCatalogByJob />} />
              <Route path="/competencies/catalog-matrix" element={<CompetenciesCatalogMatrix />} />
              <Route path="/competencies/catalog-behaviors" element={<CompetenciesCatalogBehaviors />} />
              <Route path="/competencies/catalog-criterias" element={<CompetenciesCatalogCriterias />} />
              <Route path="/competencies/report-by-user" element={<CompetenciesReportByUser />} />
              <Route path="/competencies/report" element={<CompetenciesReport />} />
              <Route path="/competencies/report-matrix" element={<CompetenciesReportMatrix />} />

              {/* Rewards */}
              <Route path="/rewards" element={<PersalRewards />} />

              {/* Safety */}
              <Route path="/safety/register" element={<SafetyRegisterAccident />} />
              <Route path="/safety/report" element={<SafetyReportAccidents />} />
              <Route path="/safety/injuries" element={<SafetyInjuriesData />} />

              {/* Others */}
              <Route path="/others/email-password" element={<OthersEmailPassword />} />
              <Route path="/others/telephone" element={<OthersTelephoneExtensions />} />
              <Route path="/others/it-services" element={<OthersITServices />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
