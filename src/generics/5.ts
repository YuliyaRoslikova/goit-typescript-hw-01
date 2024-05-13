export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserDescription = Record<UserRole, string>;

const RoleDescription: UserDescription = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
