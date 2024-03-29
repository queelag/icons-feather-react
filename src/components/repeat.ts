import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRepeatElement } from '@aracna/icons-feather-web/elements/repeat-element'

export const IconFeatherRepeat: ElementComponent<IconFeatherRepeatElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRepeatElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-repeat', IconFeatherRepeatElement)
