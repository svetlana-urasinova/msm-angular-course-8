import { Component } from "@angular/core";
import { Server, Type, Types, Status, Statuses } from "./types";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomStatus = this.generateRandomStatus();
      this.appClass = this.classes[randomStatus];
      resolve(randomStatus);
    }, 2000);
  });

  public appClass: string;

  public servers: Server[] = [
    {
      instanceType: Types.Medium,
      name: "Production Server",
      status: Statuses.Stable,
      started: this.generateRandomDate(2012, 2022),
    },
    {
      instanceType: Types.Large,
      name: "User Database",
      status: Statuses.Stable,
      started: this.generateRandomDate(2012, 2022),
    },
    {
      instanceType: Types.Small,
      name: "Development Server",
      status: Statuses.Offline,
      started: this.generateRandomDate(2012, 2022),
    },
    {
      instanceType: this.generateRandomType(),
      name: "Brand-new Server",
      status: this.generateRandomStatus(),
      started: this.generateRandomDate(2012, 2022),
    },
    {
      instanceType: Types.Small,
      name: "Testing Environment Server",
      status: Statuses.Critical,
      started: this.generateRandomDate(2012, 2022),
    },
    {
      instanceType: this.generateRandomType(),
      name: "A small lonely server",
      status: this.generateRandomStatus(),
      started: this.generateRandomDate(2012, 2022),
    },
    {
      instanceType: this.generateRandomType(),
      name: "Control Server",
      status: this.generateRandomStatus(),
      started: this.generateRandomDate(2012, 2022),
    },
  ];

  public filteredStatus = "";

  public classes = {
    stable: "list-group-item-success",
    offline: "list-group-item-warning",
    critical: "list-group-item-danger",
  };

  public onAddServer(): void {
    this.servers.push({
      name: "New server",
      instanceType: this.generateRandomType(),
      status: Statuses.Stable,
      started: this.generateRandomDate(2012, 2022),
    });
  }

  private generateRandomType(): Type {
    const sizesArray = Object.values(Types);
    return sizesArray[Math.floor(Math.random() * sizesArray.length)];
  }

  private generateRandomStatus(): Status {
    const statusesArray = Object.values(Statuses);
    return statusesArray[Math.floor(Math.random() * statusesArray.length)];
  }

  private generateRandomDate(startYear: number, endYear: number): Date {
    const start = new Date(startYear, 1, 1);
    const end = new Date(endYear, 12, 31);
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
}
