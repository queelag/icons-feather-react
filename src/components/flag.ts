import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFlagElement } from '@aracna/icons-feather-web/elements/flag-element'

export const IconFeatherFlag: ElementComponent<IconFeatherFlagElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFlagElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-flag', IconFeatherFlagElement)
