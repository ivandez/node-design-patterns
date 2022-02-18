/**
 *  Observer is a behavioral design patter
 *  It's use when you want to notify a change of state to other objects
 *
 * */

/**
 * Problem
 * Let's say we work for Youtube
 * We are given a task where the subscribers of X channel have to be notify
 * when X channel uploads a new video
 * Observer is ideal for solve this task
 */

// source https://www.youtube.com/watch?v=HFkZb1g8faA

interface Observer {
  // Este es el observador (el canal de youtube)
  update(): void;
}

interface Observable {
  // Este es el observable (suscriptor)
  attach(o: Observer): any;
  detach(o: Observer): any;
  notify(): any;
}

class YoutubeChannel implements Observable {
  // estos son los observadores que observan al observable
  private subscribersChannel: Observer[];

  private lastVideoUploaded: String;

  private name: String;

  constructor(name: String) {
    this.subscribersChannel = [];
    this.lastVideoUploaded = "";
    this.name = name;
  }

  addNewVideo(title: String) {
    this.lastVideoUploaded = title;
    this.notify();
    console.log(`${this.name} has uploaded a new video: ${title}`);
  }

  public getName(): String {
    return this.name;
  }

  public getLastVideoPosted(): String {
    return this.lastVideoUploaded;
  }

  public getSubscribers(): void {
    console.log(`Subscribers of ${this.name}: `);
    this.subscribersChannel.forEach((subscriber) => {
      console.log("+", (subscriber as Subscriber).getName());
    });
  }

  public attach(o: Observer) {
    this.subscribersChannel.push(o);
  }

  public detach(o: Observer) {
    this.subscribersChannel = this.subscribersChannel.filter((subscriber) => {
      return subscriber !== o;
    });
    console.log(`${(o as Subscriber).getName()} unsubscribed`);
  }

  public notify() {
    for (const subscriptor of this.subscribersChannel) {
      subscriptor.update();
    }
  }
}

class Subscriber implements Observer {
  private observable: Observable;

  private name: String;

  constructor(name: String, observable: Observable) {
    this.observable = observable;
    this.name = name;
  }

  public getName(): String {
    return this.name;
  }

  update(): void {
    const youtubeChannel = this.observable as YoutubeChannel;

    console.log(
      `Hey ${
        this.name
      }, ${youtubeChannel.getName()} posted a new video: ${youtubeChannel.getLastVideoPosted()}`
    );
  }
}

const youtubeChannel = new YoutubeChannel("Vicesat");

const s1 = new Subscriber("Fabiana", youtubeChannel);
const s2 = new Subscriber("Anderson", youtubeChannel);
const s3 = new Subscriber("Iván", youtubeChannel);

youtubeChannel.attach(s1);
youtubeChannel.attach(s2);
youtubeChannel.attach(s3);

youtubeChannel.getSubscribers();

youtubeChannel.addNewVideo("I made the faster electric car ever made! :0");

youtubeChannel.detach(s3);

youtubeChannel.getSubscribers();

youtubeChannel.addNewVideo("I rent a private island");
