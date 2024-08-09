import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCodesandboxElement } from '@aracna/icons-feather-web/elements/codesandbox-element'

export const IconFeatherCodesandbox: ElementComponent<IconFeatherCodesandboxElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCodesandboxElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-codesandbox', IconFeatherCodesandboxElement)
