import { IResourceComponentsProps } from "@refinedev/core";
import { AntdShowInferencer } from "@refinedev/inferencer/antd";

export const BlogPostShow: React.FC<IResourceComponentsProps> = () => {
  return (
    <AntdShowInferencer
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
