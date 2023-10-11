import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCodesandboxElement } from '@aracna/icons-feather-web/elements/codesandbox-element'

export const IconFeatherCodesandbox: ElementComponent<IconFeatherCodesandboxElement, IconProps> = createBaseElementComponent<
  IconFeatherCodesandboxElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-codesandbox', IconFeatherCodesandboxElement)
