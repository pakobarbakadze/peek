// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.1
// source: proto/user.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "user";

export interface GetUserRequest {
  name: string;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface MakeFriendsRequest {
  user1Name: string;
  user2Name: string;
}

export interface EmptyResponse {
}

export const USER_PACKAGE_NAME = "user";

export interface UserServiceClient {
  getUser(request: GetUserRequest): Observable<UserResponse>;

  createUser(request: CreateUserRequest): Observable<UserResponse>;

  makeFriends(request: MakeFriendsRequest): Observable<EmptyResponse>;
}

export interface UserServiceController {
  getUser(request: GetUserRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  createUser(request: CreateUserRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  makeFriends(request: MakeFriendsRequest): Promise<EmptyResponse> | Observable<EmptyResponse> | EmptyResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getUser", "createUser", "makeFriends"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
