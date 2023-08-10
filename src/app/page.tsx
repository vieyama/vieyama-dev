import {Button} from "~/components/UI/Button";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center gap-x-2">
        <Button size="sm" className="">
          Button Primary small
        </Button>
        <Button size="sm" variant="secondary">
          Button Secondary small
        </Button>
        <Button size="sm" variant="danger">
          Button Danger small
        </Button>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <Button size="md" className="">
          Button Primary medium
        </Button>
        <Button size="md" variant="secondary">
          Button Secondary medium
        </Button>
        <Button size="md" variant="danger">
          Button Danger medium
        </Button>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <Button size="lg" className="">
          Button Primary large
        </Button>
        <Button size="lg" variant="secondary">
          Button Secondary large
        </Button>
        <Button size="lg" variant="danger">
          Button Danger large
        </Button>
      </div>
    </main>
  );
}
