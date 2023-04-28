import { IResourceComponentsProps } from "@refinedev/core";
import { AntdCreateInferencer } from "@refinedev/inferencer/antd";

export const BlogPostCreate: React.FC<IResourceComponentsProps> = () => {
  return (
    <AntdCreateInferencer
      fieldTransformer={(field: any) => {
        if (["$permissions", "$updatedAt"].includes(field.key)) {
          return false;
        }

        if (field.key === "$createdAt") {
          field.key = "created_at";
          field.title = "Created At";
        }

        return field;
      }}
    />
  );
};
