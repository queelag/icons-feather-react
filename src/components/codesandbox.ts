import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCodesandboxElement } from '@aracna/icons-feather-web/elements/codesandbox-element'

export const IconFeatherCodesandbox: ElementComponent<IconFeatherCodesandboxElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCodesandboxElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-codesandbox', IconFeatherCodesandboxElement)
