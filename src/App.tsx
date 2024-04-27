import { TextField } from "@/components/ui/TextField/TextField";

export function App() {
  return (
    <div>
      <TextField
        error={""}
        label={"Name"}
        placeholder={"Text your Name"}
        variant={"text"}
      />
      <TextField
        disabled
        error={""}
        label={"ads"}
        placeholder={"Text your Name"}
        variant={"password"}
      />
      <TextField
        error={""}
        label={"asdsadad"}
        onClearClick={() => alert("click")}
        placeholder={"Text your Name"}
        variant={"search"}
      />
    </div>
  );
}
