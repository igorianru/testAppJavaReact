package com.testapp.model;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name="number")
    private int number;

    @Column(name="name")
    private String name;

    @Column(name="from")
    private String from;

    @Column(name="to")
    private String to;

    @Column(name="status")
    private String status;

    @Column(name="directories_id")
    private int directoriesId;

    public Task() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getDirectoriesId() {
        return directoriesId;
    }

    public void setDirectoriesId(int directoriesId) {
        this.directoriesId = directoriesId;
    }

    @Override
    public String toString() {
        return "Task [id=" + id + ", number=" + number + ", name=" + name + ", from=" + from + ", to=" + to + ", status=" + status + ", directoriesId=" + directoriesId + "]";
    }
}
