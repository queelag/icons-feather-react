import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherRepeatElement } from '@aracna/icons-feather-web/elements/repeat-element'

export const IconFeatherRepeat: ElementComponent<IconFeatherRepeatElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRepeatElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-repeat', IconFeatherRepeatElement)
