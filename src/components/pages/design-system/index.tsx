import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function DesignSystem() {
  return (
    <div className="container mx-auto px-5 max-w-5xl flex flex-col gap-5">
      <h1>Design System</h1>
      <div className="flex items-center gap-2">
        <div className="w-20">Button:</div>
        <div className="flex gap-2">
          <Button>Add</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="outline">Edit</Button>
          <Button variant="outline">Select All</Button>
          <Button variant="destructive">Delete All</Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-20">Select:</div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="incomplete">Incomplete</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-20">Input:</div>
        <div className="flex gap-2">
          <label htmlFor="">
            <Input type="text" />
          </label>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-20">Input:</div>
        <div className="flex gap-2">
          <label htmlFor="">
            <Checkbox />
          </label>
        </div>
      </div>
    </div>
  );
}
