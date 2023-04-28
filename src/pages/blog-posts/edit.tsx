import { IResourceComponentsProps } from "@refinedev/core";
import { AntdEditInferencer } from "@refinedev/inferencer/antd";

export const BlogPostEdit: React.FC<IResourceComponentsProps> = () => {
  return (
    <AntdEditInferencer
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
