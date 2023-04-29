import {
  DownOutlined,
  FireFilled,
  LogoutOutlined,
  NotificationOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  SmileOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { useGetIdentity, useGetLocale, useSetLocale } from "@refinedev/core";
import {
  Layout as AntdLayout,
  Avatar,
  Button,
  Divider,
  Dropdown,
  MenuProps,
  Space,
  Switch,
  Typography,
  theme,
} from "antd";
import React, { useContext } from "react";

import { useTranslation } from "react-i18next";

import { ColorModeContext } from "../../contexts/color-mode";

const { Text } = Typography;
const { useToken } = theme;

type IUser = {
  id: number;
  name: string;
  avatar: string;
};

export const Header: React.FC = () => {
  const { token } = useToken();
  const { i18n } = useTranslation();
  const locale = useGetLocale();
  const changeLanguage = useSetLocale();
  const { data: user } = useGetIdentity<IUser>();
  const { mode, setMode } = useContext(ColorModeContext);

  const currentLocale = locale();

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle = {
    boxShadow: "none",
  };

  const menuItems: MenuProps["items"] = [...(i18n.languages || [])]
    .sort()
    .map((lang: string) => ({
      key: lang,
      onClick: () => changeLanguage(lang),
      icon: (
        <span style={{ marginRight: 8 }}>
          <Avatar size={16} src={`/images/flags/${lang}.svg`} />
        </span>
      ),
      label: lang === "en" ? "English" : "German",
    }));

  const accountItems: MenuProps["items"] = [
    {
      key: "1",
      icon: <SmileOutlined />,
      label: (
        <>
          <Space style={{ marginLeft: "8px" }} size="middle">
            {user?.name && <Text strong>{user.name}</Text>}
            {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
          </Space>
        </>
      ),
    },
    {
      key: "2",
      icon: <FireFilled />,
      label: (
        <>
          Color Switch
          <Switch
            checkedChildren="🌛"
            unCheckedChildren="🔆"
            onChange={() => setMode(mode === "light" ? "dark" : "light")}
            defaultChecked={mode === "dark"}
          />
        </>
      ),
    },
    {
      key: "3",
      icon: <UserSwitchOutlined />,
      label: <>Manage Accounts</>,
    },
    {
      key: "4",
      icon: <UserAddOutlined />,
      label: <>Add Account</>,
    },
    {
      key: "5",
      icon: <SettingOutlined />,
      label: <>Settings</>,
    },
    {
      key: "6",
      icon: <LogoutOutlined />,
      label: <>Logout</>,
    },
  ];

  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  return (
    <AntdLayout.Header
      style={{
        backgroundColor: token.colorBgElevated,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "64px",
      }}
    >
      <Space>
        <Dropdown
          menu={{
            items: menuItems,
            selectedKeys: currentLocale ? [currentLocale] : [],
          }}
        >
          <Button type="text">
            <Space>
              <Avatar size={16} src={`/images/flags/${currentLocale}.svg`} />
              {currentLocale === "en" ? "English" : "German"}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <QuestionCircleOutlined />
        <WindowsOutlined />
        <NotificationOutlined />
        {/* <Switch
          checkedChildren="🌛"
          unCheckedChildren="🔆"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "dark"}
        /> */}

        <Dropdown
          menu={{ items: accountItems }}
          dropdownRender={(menu) => (
            <div style={contentStyle}>
              {React.cloneElement(menu as React.ReactElement, {
                style: menuStyle,
              })}
              <Divider style={{ margin: 0 }} />
              {/* <Space style={{ padding: 8 }}>
                <Row>
                  <Col span={24}>
                    <List
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={(item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={
                              <a href="https://ant.design">{item.title}</a>
                            }
                            description="round applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </Space> */}
            </div>
          )}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Space style={{ marginLeft: "8px" }} size="middle">
                {user?.name && <Text strong>{user.name}</Text>}
                {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
              </Space>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Space>
    </AntdLayout.Header>
  );
};
