import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCodepenElement } from '@aracna/icons-feather-web/elements/codepen-element'

export const IconFeatherCodepen: ElementComponent<IconFeatherCodepenElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCodepenElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-codepen', IconFeatherCodepenElement)
